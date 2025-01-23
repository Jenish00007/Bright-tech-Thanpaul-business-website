import React from "react";
import { styled } from "@mui/system";
import { yellow } from "@mui/material/colors";

const Container = styled("div")({
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.6,
  color: "rgb(252, 249, 252)",
  padding: 20,
  maxWidth: 800,
  margin: "0 auto",
});

const Heading = styled("h1")({
  fontSize: 24,
  color: yellow[500],
  fontWeight: "bold",
  marginBottom: 10,
});

const Subheading = styled("h2")({
  fontSize: 18,
  color: yellow[500],
  fontWeight: "bold",
  marginTop: 20,
  marginBottom: 10,
});

const Paragraph = styled("p")({
  marginBottom: 15,
});

const TermsAndConditions = () => {
  return (
    <Container>
      <Heading>Terms and Conditions</Heading>
      <Paragraph>
        Welcome to our Terms and Conditions. By using our platform, you agree to the following terms.
      </Paragraph>

      <Subheading>User Responsibilities</Subheading>
      <Paragraph>
        As a user, you agree to provide accurate information and refrain from engaging in prohibited activities, such as fraud or misuse of services.
      </Paragraph>

      <Subheading>Service Usage</Subheading>
      <Paragraph>
        Our services are provided "as is." We are not liable for any interruptions or issues that may arise while using our platform.
      </Paragraph>

      <Subheading>Intellectual Property</Subheading>
      <Paragraph>
        All content on our platform, including text, images, and code, is protected by copyright and may not be used without permission.
      </Paragraph>

      <Subheading>Termination</Subheading>
      <Paragraph>
        We reserve the right to terminate or suspend your access to our platform if you violate these terms.
      </Paragraph>

      <Paragraph>
        If you have any questions about our Terms and Conditions, feel free to contact us.
      </Paragraph>
    </Container>
  );
};

export default TermsAndConditions;
