import { Building2, GraduationCap, Cloud, Shield, Server, Cpu } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const CareerTimeline = () => {
  const experiences = [
    {
      company: "UPC",
      role: "Network Engineer",
      description: "Started my career at this pan-European telecom provider, coordinating backbone upgrades alongside the NOC in Bucharest. Handled Cisco 7600 series routers and redesigned the access layer for Timișoara.",
      icon: Building2,
      color: "orange",
      image: null
    },
    {
      company: "Polytechnic University",
      role: "Cisco CCNA Instructor",
      description: "Taught Cisco CCNA while working at UPC. After a year and a half, awarded Cisco's Expert Instructor Excellence Badge for maintaining an 80%+ student pass rate.",
      icon: GraduationCap,
      color: "orange",
      image: "https://images.banszky.men/cv/CCNA-expert-instructor.jpg"
    },
    {
      company: "AtoS",
      role: "Security Engineer",
      description: "Worked mainly in the security domain with Checkpoint, Palo Alto, and Cisco ASA, handling upgrades and firewall rule base management. Participated in on-site data center visits in Germany and Belgium.",
      icon: Shield,
      color: "orange",
      image: null
    },
    {
      company: "Nokia",
      role: "Cloud Integration Engineer",
      description: "Had two roles: managing a large African IP backbone with UK-based data centers, and as a Cloud Integration Engineer. Trained in Espoo, Finland, then led full on-site deployment in Chișinău, Moldova.",
      icon: Cloud,
      color: "orange",
      image: [
        "https://images.banszky.men/cv/01NokiaCNF-test.jpeg",
        "https://images.banszky.men/cv/02NokiaCNA-test.jpeg"
      ]
    },
    {
      company: "IBM",
      role: "Global Data Center Engineer",
      description: "Worked for almost 4 years in a global team managing 7 data centers under a 'follow the sun' model. Extensive work with Vyatta, pfSense, Cisco ASA, and migrated Core DC ASA firewalls to Cisco Firepower.",
      icon: Server,
      color: "orange",
      image: [
        "https://images.banszky.men/cv/01IBM.jpeg",
        "https://images.banszky.men/cv/02IBM.jpeg",
        "https://images.banszky.men/cv/07IBM.jpeg"
      ]
    },
    {
      company: "Cloudbasesolutions",
      role: "Infrastructure Consultant",
      description: "Helped relocate and rebuild a small data center. Handled pfSense BGP routing, Arista MLAG switching, and Proxmox-based server infrastructure across 3 racks.",
      icon: Building2,
      color: "orange",
      image: null
    },
    {
      company: "Homelab",
      role: "Proxmox Server: Security & Networking Virtualization",
      description: `Hardware Specs:
* CPU: Intel i7 (14th 14700k, 20 cores for robust VM performance)
* RAM: 128GB DDR5 
* Storage: 10TB HDD 1x4TB (for NAS) + 1x2TB SSD (for ISO images) + 1X4TBB NVMe SSD (for Proxmox OS and VM storage cache)
* External storage: 12TB for Backup
* Networking: Dual 1GbE NICs (upgradable to 10GbE for high-speed networking VMs) + PCIe Wi-Fi card (for wireless testing)
* PSU: 850W 80+ Gold for efficiency and expansion

Proxmox VE Configuration:
* Hypervisor: Proxmox VE (latest, 8.3.1) for managing VMs and containers
* Storage Setup: NVMe SSD for fast VM/container storage
* Networking: VLANs + pfSense configured for isolated security and networking labs (e.g., DMZ, SEC infected VMs, LAN).
      icon: Cpu,
      color: "orange",
      image: "https://images.banszky.men/cv/01Homelab.jpeg"
    }
  ];

  const getColorClasses = (color: string) => {
    return "text-orange-500 border-orange-500 bg-orange-500/10";
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Career Journey
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className={`p-4 rounded-full border-2 ${getColorClasses(exp.color)}`}>
                  <exp.icon className="w-8 h-8" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-orange-500">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl text-gray-300 mb-4">{exp.role}</h4>
                  <p className="text-gray-400 leading-relaxed mb-6 whitespace-pre-line">{exp.description}</p>
                  
                  {exp.image && (
                    <div className="flex flex-wrap gap-4">
                      {(Array.isArray(exp.image) ? exp.image : [exp.image]).map((img, imgIndex) => (
                        <Dialog key={imgIndex}>
                          <DialogTrigger>
                            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600 cursor-pointer hover:border-gray-500 transition-colors">
                              <div className="w-32 h-24 rounded-lg overflow-hidden">
                                <img
                                  src={img}
                                  alt="Experience Thumbnail"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </DialogTrigger>
                          <DialogContent style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                            <DialogHeader>
                              <DialogTitle>Image Viewer</DialogTitle>
                            </DialogHeader>
                            <div className="w-full h-full flex items-center justify-center">
                              {Array.isArray(exp.image) ? (
                                <Carousel className="w-full max-w-4xl">
                                  <CarouselContent>
                                    {exp.image.map((image, idx) => (
                                      <CarouselItem key={idx}>
                                        <img 
                                          src={image} 
                                          alt={`Experience Image ${idx + 1}`} 
                                          className="w-full h-auto max-h-[80vh] object-contain"
                                        />
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                                </Carousel>
                              ) : (
                                <img 
                                  src={img} 
                                  alt="Experience Image" 
                                  className="w-full h-auto max-h-[80vh] object-contain"
                                />
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Summary</h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
              I bring solid experience in <span className="text-orange-400 font-semibold">routing, switching, firewalls, data centers, and cloud integration</span>, 
              with a strong focus on <span className="text-orange-500 font-semibold">doing things properly and efficiently</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
