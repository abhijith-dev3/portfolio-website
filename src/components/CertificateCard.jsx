export default function CertificateCard({ certificate }) {
  return (
    <a
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border border-[#00D4AA]/20 rounded-xl overflow-hidden flex flex-col items-center 
                 hover:shadow-lg hover:border-[#00D4AA]/50 transition-all duration-300 cursor-pointer z-10"
    >
      {/* Teal top bar — same style as SkillCard category cards */}
      <div className="w-full h-1 bg-[#00D4AA]"></div>

      <div className="p-6 flex flex-col items-center justify-center">
        <img
          src={certificate.logo}
          alt={certificate.name}
          className="w-full h-40 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-base font-semibold text-center text-[#0F172A] mb-2">
          {certificate.name}
        </h3>
        {certificate.link && (
          <span className="text-sm text-[#00D4AA] font-medium mt-1 group-hover:underline transition-all">
            View Certificate →
          </span>
        )}
      </div>
    </a>
  );
}
