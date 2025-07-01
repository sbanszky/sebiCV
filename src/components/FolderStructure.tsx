import { Folder, Image } from "lucide-react";
import { useState } from "react";

const FolderStructure = () => {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);
  
  const jobFolders = [
    {
      name: "UPC",
      description: "Pan-European telecom provider experience",
      photos: Array.from({ length: 5 }, (_, i) => `photo${i + 1}.jpg`)
    },
    {
      name: "Polytechnic University",
      description: "Cisco CCNA Instructor role",
      photos: Array.from({ length: 3 }, (_, i) => `photo${i + 1}.jpg`)
    },
    {
      name: "AtoS",
      description: "Security domain work",
      photos: Array.from({ length: 4 }, (_, i) => `photo${i + 1}.jpg`)
    },
    {
      name: "Nokia",
      description: "Cloud Integration Engineer",
      photos: Array.from({ length: 6 }, (_, i) => `photo${i + 1}.jpg`)
    },
    {
      name: "IBM",
      description: "Global Data Center Engineer",
      photos: Array.from({ length: 8 }, (_, i) => `photo${i + 1}.jpg`)
    },
    {
      name: "Cloudbase",
      description: "Infrastructure Consultant",
      photos: Array.from({ length: 4 }, (_, i) => `photo${i + 1}.jpg`)
    }
  ];

  const toggleFolder = (folderName: string) => {
    setExpandedFolder(expandedFolder === folderName ? null : folderName);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Courses
        </h2>

        <div className="space-y-4">
          {jobFolders.map((folder, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-lg rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <div
                className="flex items-center p-6 cursor-pointer"
                onClick={() => toggleFolder(folder.name)}
              >
                <Folder className="w-6 h-6 text-orange-500 mr-4" />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-orange-400">{folder.name}</h3>
                  <p className="text-gray-400 text-sm">{folder.description}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  {folder.photos.length} photos
                </span>
              </div>

              {expandedFolder === folder.name && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3 mt-4">
                    {folder.photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="bg-gray-800/50 rounded-lg p-3 border border-gray-600 hover:border-orange-500 transition-colors"
                      >
                        <div className="flex flex-col items-center">
                          <Image className="w-6 h-6 text-orange-500 mb-2" />
                          <span className="text-gray-400 text-xs text-center">{photo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <p className="text-gray-300">
              <span className="text-orange-400 font-semibold">Total:</span> {jobFolders.reduce((acc, folder) => acc + folder.photos.length, 0)} courses organized across {jobFolders.length} career milestones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FolderStructure;
