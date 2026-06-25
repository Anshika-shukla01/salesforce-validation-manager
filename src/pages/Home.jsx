import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Salesforce Validation Rule Manager</h1>

      <p>
        Connect your Salesforce Org and 
        manage validation rules.
      </p>

      <LoginButton />
    </div>
  );
}

export default Home;