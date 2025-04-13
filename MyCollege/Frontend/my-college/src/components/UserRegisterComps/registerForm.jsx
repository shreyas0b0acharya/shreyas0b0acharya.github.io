import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../ui/ButtonComp";
import { Card } from "../ui/card";
import { DropDownMenu } from "../ui/DropDownMenu";

export const RegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [usn, setUsn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [labBatch, setLabBatch] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setUsn("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSemester("");
    setSection("");
    setLabBatch("");
  };
  

  const semesters = [
    [1, "1st Semester"],
    [2, "2nd Semester"],
    [3, "3rd Semester"],
    [4, "4th Semester"],
    [5, "5th Semester"],
    [6, "6th Semester"],
    [7, "7th Semester"],
    [8, "8th Semester"],
  ];

  const sections = [
    ["A", "A Section"],
    ["B", "B Section"],
  ];

  const labBatches =
    section === "A"
      ? [
          ["A1", "A1 Batch"],
          ["A2", "A2 Batch"],
          ["A3", "A3 Batch"],
        ]
      : [
          ["B1", "B1 Batch"],
          ["B2", "B2 Batch"],
          ["B3", "B3 Batch"],
        ];

    const SendUserDetails = (formData)=>{
        fetch("http://localhost:5000/userRegistration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
          console.log("Success:", data);
        })
        .catch(error => {
          console.error("Error:", error);
        }); 
    };
    

  const handleForm = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const formData = isLogin
      ? { email:email,
        password:password }
      : {
          first_name: firstName,
          last_name: lastName,
          usn:usn,
          email:email,
          password:password,
          semester:semester,
          section:section,
          lab_batch: labBatch,
        };
    console.log(formData);
    SendUserDetails(formData);
    resetForm();
    // Here you can proceed with submitting formData to the backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-themeColor dark:bg-black p-6">
      <Card className="w-full max-w-md bg-white dark:bg-black p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>
        <form onSubmit={handleForm}>
          {!isLogin ? (
            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="text"
                  legend="First Name"
                  placeholder="e.g., Shreyas"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  type="text"
                  legend="Last Name"
                  placeholder="e.g., Acharya"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <Input
                type="text"
                legend="USN"
                placeholder="e.g., 4SM23CS088"
                required
                value={usn}
                onChange={(e) => setUsn(e.target.value)}
              />
              <Input
                type="email"
                legend="Email"
                placeholder="e.g., shreyas@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                legend="Password"
                placeholder="e.g., ••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                legend="Confirm Password"
                placeholder="e.g., ••••••••"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <DropDownMenu
                legend="Semester"
                options={semesters}
                value={semester}
                onChange={(val) => setSemester(val)}
              />
              <DropDownMenu
                legend="Section"
                options={sections}
                value={section}
                onChange={(val) => {
                  setSection(val);
                  setLabBatch(""); // Reset labBatch when section changes
                }}
              />
              <DropDownMenu
                legend="Lab Batch"
                options={labBatches}
                value={labBatch}
                onChange={(val) => setLabBatch(val)}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                type="email"
                legend="Email"
                placeholder="e.g., shreyas@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                legend="Password"
                placeholder="e.g., ••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          <Button className="w-full mt-6" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-black dark:text-themeColor hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up here."
              : "Already have an account? Login here."}
          </button>
        </div>
      </Card>
    </div>
  );
};
