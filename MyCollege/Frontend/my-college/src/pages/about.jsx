import { Aside } from "../layouts/asideComp";

export const About = () => {
    return (
      <div className="flex ">
        <div className="space-y-4 w-[80%] border-r border-black-1 " >
          <h1 className="text-2xl font-bold">About Page</h1>
          
        </div>

        <Aside /> 
      </div>
    );
  }
  