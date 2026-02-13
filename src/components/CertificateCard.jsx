export default function CertificateCard({ certificate }) {
  return (
    <a 
      href={certificate.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 flex flex-col items-center justify-center 
                 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer z-10"
    >
      <img src={certificate.logo} alt={certificate.name} className="w-full h-40 object-contain mb-4" />
      <h3 className="text-base font-semibold text-center text-[#0F172A]">{certificate.name}</h3>
      {certificate.link && (
        <span className="text-sm text-blue-500 mt-2 hover:underline">View Certificate</span>
      )}
    </a>
  );
}
