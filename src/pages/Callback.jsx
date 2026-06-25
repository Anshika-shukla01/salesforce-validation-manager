import { useEffect } from "react";

function Callback() {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const code = params.get("code");
        const codeVerifier = localStorage.getItem("code_verifier");

        console.log("Authorization Code:", code);

        fetch("http://localhost:5000/oauth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, codeVerifier }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("FULL TOKEN RESPONSE:");
                console.log(data);

                if (data.access_token) {
                    localStorage.setItem(
                        "accessToken",
                        data.access_token
                    );

                    localStorage.setItem(
                        "instanceUrl",
                        data.instance_url
                    );

                    window.location.href = "/dashboard";

                    console.log("ACCESS TOKEN SAVED");
                } else {
                    console.log("TOKEN ERROR:");
                    console.log(data);
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "20px",
            }}
        >
            Connecting to Salesforce...
        </div>
    );
}

export default Callback;