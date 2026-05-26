import Button from "../button/Button";

interface CertificateContentProps {
  image: string;
  certificateTitle: string;
  certificateDescription: string;
  certificateLink: string;
}

export default function CertificateContent({
  image,
  certificateTitle,
  certificateDescription,
  certificateLink,
}: CertificateContentProps) {
  return (
    <>
      <div className="bg-dark-purple-800 border border-dark-purple-600 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1.25 hover:shadow-xl flex flex-col gap-6 text-center items-center">
        <div>
          <div className="image-container mb-4">
            <img
              src={image}
              alt="Imagem de projeto"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{certificateTitle}</h3>
          <p className="text-sm md:text-base text-gray-300">
            {certificateDescription}
          </p>
        </div>
        <div className="certificate-button-container flex justify-center">
          <Button href={certificateLink}>Abrir certificado</Button>
        </div>
      </div>
    </>
  );
}
