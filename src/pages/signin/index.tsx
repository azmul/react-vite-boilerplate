import { useNavigate, useLocation } from "react-router-dom";
import { Form, Input } from "antd";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import BackgroundImage from "@/components/bg-image/BackgroundImage";
import ErrorFallbackUI from "@/components/error-boundary/ErrorBoundary";
import { Helmet } from "react-helmet";
import * as authApi from "@/identity/identityApi";
import { saveTokens, saveRolesPermissions } from "@/identity/identityHelper";
import { UserPermissions } from "@/identity/identityScopes";
import { FieldType, JwtPayload } from "@/identity/identityType";

import LOGO from "@/assets/images/logoipsum-239.svg";
import BG_IMAGE from "@/assets/images/login-bg6.jpg";

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const successRedirectUrl: string = location.state?.from?.pathname ?? "/";

  const userLogin = useMutation({
    mutationFn: authApi.loginUser,
  });

  const onFinish = async (values: any) => {

    // const rawResponse = await fetch("https://ec2-52-212-246-49.eu-west-1.compute.amazonaws.com/api/v1/auth/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username: "azmul",
    //     password: "123456",
    //   }),
    // });
    // const res = await rawResponse.json();
    // console.log(res)

    try {
      userLogin.mutate(values, {
        onSuccess:  (response) => {
          const accessToken = response.data?.data?.accessToken;
          const refreshToken = response.data?.data?.refreshToken;
          const decoded: JwtPayload = jwtDecode(accessToken);

          saveTokens(accessToken, refreshToken);
          saveRolesPermissions(decoded.roles, [UserPermissions.TEST_READ]);
          navigate(successRedirectUrl);
        },
        onError: (err) => {
          console.log(err);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ErrorFallbackUI>
      <Helmet>
        <title>SignIn | Sarbs</title>
        <meta name="description" content="SignIn Page" />
      </Helmet>
      <BackgroundImage
        className="accountbg"
        backgroundImage={`url(${BG_IMAGE})`}
      />
      <div className="wrapper-page account-page-full">
        <div className="card shadow-none">
          <div className="card-block">
            <div className="account-box">
              <div className="card-box shadow-none p-4">
                <div className="p-2">
                  <div className="text-center mt-4">
                    <a href="index.html">
                      <img src={LOGO} height="60" alt="logo" />
                    </a>
                  </div>

                  <h4 className="font-size-18 mt-5 text-center">
                    Welcome Back !
                  </h4>
                  <p className="text-muted text-center">
                    Sign in to continue to SARBS RMS.
                  </p>

                  <Form
                    name="loginForm"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="mt-4"
                  >
                    <Form.Item<FieldType>
                      label="Username"
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter username" />
                    </Form.Item>

                    <Form.Item<FieldType>
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password placeholder="Enter password" />
                    </Form.Item>

                    <div className="mb-3 row">
                      <div className="col-sm-6">
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-lock"></i> Forgot your password?
                        </a>
                      </div>
                      <div className="col-sm-6 text-end">
                        <Form.Item>
                          <button
                            type="submit"
                            className="btn btn-primary w-md waves-effect waves-light"
                          >
                            Log In
                          </button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorFallbackUI>
  );
}
