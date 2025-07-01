import { GraduationCap, Award, BookOpen, Shield, Cloud, Server } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Cisco CCNA Routing & Switching",
      institution: "Polytechnic University of Timișoara",
      description: "Comprehensive networking fundamentals course covering routing protocols, switching technologies, and network troubleshooting.",
      icon: GraduationCap,
      duration: "1.5 years",
      achievement: "Expert Instructor Excellence Badge - 80%+ student pass rate"
    },
    {
      title: "Network Security Fundamentals",
      institution: "Self-taught & Industry Experience",
      description: "Advanced security concepts including firewall management, intrusion detection, and security policy implementation.",
      icon: Shield,
      duration: "Ongoing",
      achievement: "Hands-on experience with Checkpoint, Palo Alto, Cisco ASA"
    },
    {
      title: "Cloud Integration & Virtualization",
      institution: "Nokia Training Center, Espoo",
      description: "OpenStack cloud deployment, HP blade infrastructure management, and EMC storage integration.",
      icon: Cloud,
      duration: "Intensive training",
      achievement: "Led full on-site deployment in Chișinău, Moldova"
    },
    {
      title: "Data Center Operations",
      institution: "IBM Global Operations",
      description: "Enterprise-scale data center management, follow-the-sun operations, and infrastructure automation.",
      icon: Server,
      duration: "4 years",
      achievement: "Managed 7 global data centers"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Training & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-500/10 rounded-full border border-orange-500">
                  <course.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-orange-500">{course.title}</h3>
                  <p className="text-gray-400 text-sm">{course.institution}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{course.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-orange-400 font-semibold">{course.duration}</span>
                <Award className="w-4 h-4 text-orange-500" />
              </div>

              <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-600">
                <p className="text-gray-300 text-sm">
                  <span className="text-orange-400 font-semibold">Achievement:</span> {course.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Continuous Learning</h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My approach to professional development combines <span className="text-orange-400 font-semibold">formal training</span> with 
              <span className="text-orange-500 font-semibold"> hands-on experience</span>. I believe in learning by doing and 
              sharing knowledge with others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
