import React, { useEffect, useState } from "react";
import { MainComp } from "../layouts/mainComp";
import { Button } from "../components/ui/ButtonComp";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../components/UserRegisterComps/cookies";
import { Card } from "../components/ui/card";
import { Input } from "../components/Input";
import { H3, H4 } from "../components/ui/h2Comp";
import { branches, sections, semesters } from "../components/UserRegisterComps/SemSecBranch";
import { DropDownMenu } from "../components/ui/DropDownMenu";
import { backendAddress } from "../backendAddres";

export const MyProfile = () => {
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem("loggedIn") === "true");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [editing, setEditing] = useState(false);

  const userEmail = getCookie("email");

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
    localStorage.setItem("darkTheme", "false");
    localStorage.setItem("Branch", "");
    localStorage.setItem("email", "");
    localStorage.setItem("labBatch", "");
    navigate("/");
  };

  useEffect(() => {
    if (userEmail) {
      fetch(`${backendAddress}/getUserData?email=${userEmail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("User data:", data);
          setUserData(data);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }, [userEmail]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [labBatch, setLabBatch] = useState("");
  // const [bloodGroup, setBloodGroup] = useState("");
  const [branch, setBranch] = useState("");

  useEffect(() => {
    if (userData) {
      setFirstName(userData.first_name || "");
      setLastName(userData.last_name || "");
      setSemester(userData.semester || "");
      setSection(userData.section || "");
      setLabBatch(userData.lab_batch || "");
      // setBloodGroup(userData.blood_group || "");
      setBranch(userData.branch || "");
    }
  }, [userData]);

  const getYear = (sem) => {
    const s = parseInt(sem);
    if (s === 1 || s === 2) return "1st Year";
    if (s === 3 || s === 4) return "2nd Year";
    if (s === 5 || s === 6) return "3rd Year";
    if (s === 7 || s === 8) return "4th Year";
    return "Unknown";
  };

  const formData = {
      first_name: firstName,
      last_name: lastName,
      email:userData.email,
      semester:semester,
      section:section,
      lab_batch: labBatch,
      branch:branch
  };

  const updateData = () =>{
      setEditing(false);
      fetch(`${backendAddress}/updateUserData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.text())
        .then(data => {
          alert(data,"Log In Now");
        })
        .catch(error => {
          console.error("Error:", error);
        });
  }

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

  
      localStorage.setItem("labBatch", labBatch);
      localStorage.setItem("Branch", branch);
      localStorage.setItem("email", userData.email);

  return (
    
    <MainComp className="bg-themeColor ">
         <div className="sm:mx-auto " >
          <Card className=" bg-white dark:bg-black mt-10">
            
            
            
            <div className="text-center mb-8 " >
              {editing ? (
                <div className="flex flex-row gap-2 justify-center ">
                  <Input
                    className="text-2xl font-bold text-right"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    className="text-2xl font-bold text-left"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              ) : (
                <h1 className="text-3xl font-bold text-black dark:text-white">
                  {firstName} {lastName}
                </h1>
              )}
              <p className="text-black font-semibold dark:text-white text-lg">USN: {userData.usn}</p>
            </div>

            <div className="grid sm:grid-cols-2  gap-6 ">
              <Card >
                <H3 className="font-semibold text-lg">Email</H3>
                <H4>{userData.email}</H4>
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Account Created</H3>
                <H4>{new Date(userData.created_at).toLocaleDateString()}</H4>
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">User ID</H3>
                <H4>{userData.id}</H4>
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Academic Year</H3>
                <H4>{getYear(semester)}</H4>
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Branch</H3>
                {editing ? (
                  <DropDownMenu
                  options={branches}
                  value={branch}
                  onChange={(val) => setBranch(val)}
                />
                ) : (
                  <H4>{branch}</H4>
                )}
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Semester</H3>
                {editing ? (
                  <DropDownMenu
                    options={semesters}
                    value={semester}
                    onChange={(val) => setSemester(val)}
                  />
                ) : (
                  <H4>{semester}</H4>
                )}
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Section</H3>
                {editing ? (
                  <DropDownMenu
                    options={sections}
                    value={section}
                    onChange={(val) => setSection(val)}
                  />
                ) : (
                  <H4>{section}</H4>
                )}
              </Card>

              <Card>
                <H3 className="font-semibold text-lg">Lab Batch</H3>
                {editing ? (
                  <DropDownMenu
                    options={labBatches}
                    value={labBatch}
                    onChange={(val) => setLabBatch(val)}
                  />
                ) : (
                  <H4>{labBatch}</H4>
                )}
              </Card>


          

          

          
            </div>
            <div className="flex flex-row justify-center ">
            

                {editing ? (
                  <div className="flex flex-row gap-4 mt-8">
                      <Button onClick={updateData}>Save</Button>
                      <Button onClick={()=>setEditing(false)}>Cancel</Button>
                  </div>
                ) : (
                  <Button className="mt-8" onClick={() => setEditing(true)}>Edit</Button>
                )}
            </div>

            
          </Card>

          
          
        </div>
        {editing ? (null
                  ) : (
                    <Button className="mx-auto my-20 dark:bg-black dark:border dark:border-black  " onClick={logout} >Log Out</Button>
            )}
    </MainComp>
  );
};
