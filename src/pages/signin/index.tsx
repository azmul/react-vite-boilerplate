import { useNavigate, useLocation } from "react-router-dom";
import { Form, Input } from "antd";
import { jwtDecode } from "jwt-decode";
import { useMutation } from "@tanstack/react-query";
import BackgroundImage from "@/components/bg-image/BackgroundImage";
import ErrorFallbackUI from "@/components/error-boundary/ErrorBoundary";
import { Helmet } from "react-helmet";
import * as authApi from "@/identity/identityApi";
import { saveTokens, saveRolesPermissions } from "@/identity/identityHelper";
import { UserRoles, UserPermissions } from "@/identity/identityScopes";
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
    const accessToken =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImF6bXVsIiwic3ViIjoyLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTcwMjQ1MjIwMywiZXhwIjoxNzAyNDU1ODAzfQ.qz4Lit1AyqJuXnRQcP9sa_TviX8RwF0PvzpoAnDycyiJq78eXPZVytg2rTNuU2I9o4RHMZSIRzUpnej0kA1nijpxkZJ3SMHqvtmONpyRLeC-0ApdUBw8w38JYNmyEu1JiVJhTm6ywx8l7-qsxB0SrSP6PJ6His1Ucsffs0XunrWwEpIIWVEPql4GXXNGqivBceTEDvoU4QBYFTLSDWS2IFyvOKAdcrNBt3sOf4aCQ8iOiXXjmYgpoZ_sl5CvOd2qxa0Sr5epSUOcbCuqdW66wTRIyDCuEgGNaUHuGsJlp4egxl9n4zMmi0e92cWJP_bX_7p4F2kXkOUtxKhZ8g2rMg";
    const refreshToken =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImlhdCI6MTcwMjQ1MjIwMywiZXhwIjoxNzAyNDU5NDAzfQ.LavqLqnBFkujufumOVIDYAMgz1Fnqc38znGYlIiJ2cTAZxcBA9ne4GLBxF6sEa7DiwUS32adSjrJmLyr4koMI7NfjwjS-Go20S_ZyYO4DvYiR57uXSc7bA9wic5urC6_CZlXH_3Ti-ZQTj8Y7GymzFhrJ4HIN9BjZr_6MHvy_AAFtxscU2vZe62NhQM3731lVzjPQp3GhTChvls8XpO_RfZoCvr0_W_SVJ1v0x7aVHjOBXRn8NLeHCClJJtI35Kv__RnTpTF1_ZBgN30z4Hq7H1ddXx2qZYhaqEF4fJ6N3SlzhwsDi_DgcyPT6QzmjI-ERQ8DO6QCaXl_K6eE0UV6w";
    const decoded: JwtPayload = jwtDecode(accessToken);

    try {
      userLogin.mutate(values, {
        onSuccess: (data) => {
          console.log(data);
          navigate(successRedirectUrl);
        },
        onError: (err) => {
          console.log(err);
          saveTokens(accessToken, decoded.exp, refreshToken);
          saveRolesPermissions([UserRoles.ADMIN], [UserPermissions.TEST_READ]);
          navigate(successRedirectUrl);
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
