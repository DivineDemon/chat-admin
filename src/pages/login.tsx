import { useEffect, useState } from "react";

import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { BrainCog, Gem } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import CustomToast from "@/components/ui/custom-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const { login, register, logout } = useKindeAuth();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleSubmit = () => {
    isLogin
      ? login({
          authUrlParams: {
            connection_id: `${import.meta.env.VITE_KINDE_EMAIL_CONNECTION_ID}`,
            login_hint: email,
          },
        })
      : register({
          authUrlParams: {
            connection_id: `${import.meta.env.VITE_KINDE_EMAIL_CONNECTION_ID}`,
            login_hint: email,
          },
        });
  };

  useEffect(() => {
    const intent = searchParams.get("intent");

    if (intent) {
      if (intent === "terminated") {
        logout();
        toast.custom(() => (
          <CustomToast
            type="error"
            title="Warning!"
            description="Session Expired, Please Login Again!"
          />
        ));
      }
    }
  }, [searchParams]);

  return (
    <div className="flex h-screen w-full items-center justify-center p-5">
      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 overflow-hidden rounded-xl border">
        <div className="col-span-1 flex w-full items-center justify-center bg-black/5 backdrop-blur-sm dark:bg-white/10">
          <BrainCog className="size-24 text-primary dark:text-white" />
        </div>
        <div className="relative col-span-1 flex w-full flex-col items-center justify-center gap-5 p-5 lg:p-10 xl:p-20">
          <div className="absolute right-5 top-5">
            <ModeToggle />
          </div>
          <Gem className="size-10 text-primary dark:text-white" />
          <div className="flex w-full flex-col items-center justify-center gap-1">
            <span className="w-full text-center text-3xl font-extrabold">
              Chat<span className="text-primary">GPT</span>
            </span>
            <span className="w-full text-center text-xs font-medium text-gray-400">
              Login to Access Mainframe
            </span>
          </div>
          <Button
            type="button"
            variant="default"
            size="lg"
            className="w-full"
            onClick={() =>
              isLogin
                ? login({
                    authUrlParams: {
                      connection_id: `${import.meta.env.VITE_KINDE_GOOGLE_CONNECTION_ID}`,
                    },
                  })
                : register({
                    authUrlParams: {
                      connection_id: `${import.meta.env.VITE_KINDE_GOOGLE_CONNECTION_ID}`,
                    },
                  })
            }
          >
            Continue with Google
          </Button>
          <fieldset className="flex w-full border-t text-center">
            <legend className="px-5">or</legend>
          </fieldset>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="flex w-full flex-col items-center justify-center gap-5"
          >
            <div className="flex w-full flex-col items-center justify-center gap-1.5">
              <Label htmlFor="email" className="w-full text-left">
                Email
              </Label>
              <Input
                type="email"
                placeholder="johndoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
            >
              Login
            </Button>
          </form>
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="w-full cursor-pointer text-center text-xs text-primary"
          >
            {isLogin ? (
              <span>
                Don't have an account?&nbsp;
                <span className="font-medium underline">Sign up</span>
              </span>
            ) : (
              <span>
                Already have an account?&nbsp;
                <span className="font-medium underline">Sign in</span>
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
