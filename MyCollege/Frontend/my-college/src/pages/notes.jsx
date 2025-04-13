import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { MainComp } from '../layouts/mainComp';
import { Card } from '../components/ui/card';

const fileStructure = {
  "Sub1": [['msdasd','/pdfs/BCS403-model-sqp.pdf'], 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 2', 'Note 3', 'Note 4', 'Note 5'],
  "Sub2": ['Note A', 'Note B'],
  "Sub3": ['Lecture 1', 'Lecture 2', 'Lecture 3', 'Lecture 4'],
};

export const Notes=()=> {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <MainComp>
        <h1 className="text-3xl font-semibold mb-6 text-center">My Notes</h1>
        <Card className='bg-white dark:bg-black m-4'>
            <div className="space-y-4 ">
                {Object.entries(fileStructure).map(([subject, notes]) => (
                <Card
                key={subject}
                className={`bg-white dark:bg-black ${openFolders[subject] ?
                  'hover:bg-white': "hover:border hover:border-gray dark:hover:border-black dark:hover:bg-grey hover:bg-gray-200"
                }`}>
                    {/* Folder Row */}
                    <div
                    onClick={() => toggleFolder(subject)}
                    className="group box-border flex items-center justify-between p-1 cursor-pointer  rounded-t-md"
                    >
                    <div className=" flex items-center box-border">
                        <FontAwesomeIcon
                        icon={openFolders[subject] ? faFolderOpen : faFolder}
                        className="text-themeColor mr-3 text-xl"
                        />
                        <span className={`font-medium text-black dark:text-white`}>{subject}</span>
                    </div>
                    </div>

                    {/* Notes Section (expandable) */}
                    {openFolders[subject] && (
                    <div className="ml-6 mb-3 flex flex-wrap sm:flex-row flex-col sm:flex ">
                        {notes.map((note, index) => (
                          <a
                          href={note[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        <div
                            key={index}
                            className="flex sm:flex-col flex-row sm:flex text-black
                                      dark:text-white dark:hover:text-white
                                      items-center p-2 dark:hover:bg-grey hover:bg-gray-200 rounded-md cursor-pointer sm:w-[120px] "
                        >
                            <FontAwesomeIcon
                            icon={faFileAlt}
                            className="text-themeColor mr-2 text-lg sm:text-6xl"
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
}
