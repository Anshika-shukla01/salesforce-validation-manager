import { useState } from "react";

function Dashboard() {
  const [rules, setRules] = useState([]);

  const getValidationRules = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const instanceUrl = localStorage.getItem("instanceUrl");

    const response = await fetch(
      "https://salesforce-validation-manager-backend-kpl5.onrender.com/validation-rules",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          instanceurl: instanceUrl,
        },
      }
    );

    const data = await response.json();

    console.log(data);

    setRules(data.records || []);
  };

  const toggleRule = (id) => {
    setRules((prevRules) =>
      prevRules.map((rule) =>
        rule.Id === id
          ? { ...rule, Active: !rule.Active }
          : rule
      )
    );
  };

  const deployChanges = () => {
    alert(
      "Changes prepared successfully.\nDeploy API integration can be added later."
    );
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>Salesforce Validation Rule Manager</h1>

      <button
        onClick={getValidationRules}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
        }}
      >
        Get Validation Rules
      </button>

      <button
        onClick={deployChanges}
        style={{
          padding: "10px 20px",
          marginLeft: "10px",
        }}
      >
        Deploy Changes
      </button>

      <hr />

      {rules.map((rule) => (
        <div
          key={rule.Id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{rule.ValidationName}</h3>

          <p>{rule.Description}</p>

          <p>
            Status:
            <strong>
              {rule.Active
                ? " Active"
                : " Inactive"}
            </strong>
          </p>

          <button
            onClick={() => toggleRule(rule.Id)}
          >
            {rule.Active
              ? "Disable"
              : "Enable"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;