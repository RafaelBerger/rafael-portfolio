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
      <div className="certificate-content">
        <div>
          <div className="image-container">
            <img src={image} alt="Imagem de projeto" />
          </div>
          <h3>{certificateTitle}</h3>
          <p>{certificateDescription}</p>
        </div>
        <div className="certificate-button-container">
          <Button href={certificateLink}>Abrir certificado</Button>
        </div>
      </div>
    </>
  );
}
