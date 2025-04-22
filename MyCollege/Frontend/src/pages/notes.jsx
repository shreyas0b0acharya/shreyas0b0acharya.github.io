import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { MainComp } from '../layouts/mainComp';
import { Card } from '../components/ui/card';

const fileStructure = {
  "Assignment-1": [
    ['DBMS assignment 1', 'https://drive.google.com/file/d/1cdp2mkMtMJ9UwQ5CZ3XruWBM1PC5lVxk/view?usp=drive_link'],
    ["Bio Assignment 1", "https://drive.google.com/file/d/10AMSILwXyuKNVUUTnnTU3XsfCRUZL7jK/view?usp=drive_link"],
    ["UI/UX Assignment 1", "https://drive.google.com/file/d/1fqyl71c-ktrTwF5vuMOP1527kz3tvJ3d/view?usp=drive_link"],
    ["UHV Assignment 1", "https://drive.google.com/file/d/1fcBhGIrtu97c6gRMlK9Ede7vALqWMPVB/view?usp=drive_link"]
  ],
  "Sub2": [
    ["Note A", "#"],
    ["Note B", "#"]
  ],
  "Sub3": [
    ["Lecture 1", "#"],
    ["Lecture 2", "#"],
    ["Lecture 3", "#"],
    ["Lecture 4", "#"]
  ],
};

export const Notes = () => {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <MainComp>
      <h1 className="text-3xl font-bold m-6 text-center text-themeColor dark:text-white">
        Notes & Assignment
      </h1>

      <Card className="bg-white dark:bg-black m-4">
        <div className="space-y-4">
          {Object.entries(fileStructure).map(([subject, notes]) => (
            <Card
              key={subject}
              className={`bg-white dark:bg-black ${
                openFolders[subject]
                  ? 'hover:bg-white'
                  : 'hover:border hover:border-gray dark:hover:border-black dark:hover:bg-grey hover:bg-gray-200'
              }`}
            >
              <div
                onClick={() => toggleFolder(subject)}
                className="group flex items-center justify-between p-1 cursor-pointer rounded-t-md"
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={openFolders[subject] ? faFolderOpen : faFolder}
                    className="text-themeColor mr-3 text-xl"
                  />
                  <span className="font-medium text-black dark:text-white">{subject}</span>
                </div>
              </div>

              {/* Notes List visible only if folder is open*/}
              {openFolders[subject] && (
                <div className="ml-6 mb-3 flex flex-wrap sm:flex-row flex-col">
                  {notes.map((note, index) => (
                    <a
                      key={`${subject}-${index}`}
                      href={note[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex sm:flex-col flex-row items-center p-2 dark:hover:bg-grey hover:bg-gray-200 rounded-md cursor-pointer sm:w-[180px] my-2 text-black dark:text-white dark:hover:text-white">
                        <FontAwesomeIcon
                          icon={faFileAlt}
                          className="text-themeColor sm:my-2 sm:ml-0 mr-2 text-lg sm:text-6xl"
                        />
                        {note[0]}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </MainComp>
  );
};
