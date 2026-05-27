import CertificateContent from "../components/certificate-content/CertificateContent";
import type { Certificate as CertificateItem } from "../types/cms";

interface CertificateProps {
  certificates: CertificateItem[];
}

export default function Certificate({ certificates }: CertificateProps) {
  return (
    <>
      <section
        id="certificate"
        className="bg-dark-purple-700 w-screen py-20 px-4"
      >
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-16">Certificados</h1>

          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 w-full">
            {certificates.map((data) => {
              return (
                <CertificateContent
                  key={data.id}
                  image={data.image}
                  certificateTitle={data.title}
                  certificateDescription={data.description}
                  certificateLink={data.certificateUrl}
                />
              );
            })}
          </main>
        </div>
      </section>
    </>
  );
}
