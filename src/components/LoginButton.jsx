import { getLoginUrl } from "../services/salesforceService";

function LoginButton() {

  const handleLogin = async () => {
    const loginUrl = await getLoginUrl();

    window.location.href = loginUrl;
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        padding: "12px 20px",
        cursor: "pointer",
      }}
    >
      Login With Salesforce
    </button>
  );
}

export default LoginButton;