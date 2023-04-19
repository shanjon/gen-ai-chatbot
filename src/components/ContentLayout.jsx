import React, { useState } from "react";
import {
  ContentLayout,
  Container,
  Header,
  SpaceBetween,
  Link,
  Button,
  Alert,
  Select,
  FormField } from "@cloudscape-design/components";
import TextArea from "./TextArea";
import ChatBot from "./ChatBot";
import { LLM_OPTIONS, INDUSTRY_OPTIONS } from "../resources/data-options";


export default () => {
  const initialValues = {
    industryOption: "",
    llmOption: ""
  }
  const [industryOption, setIndustryOption] = React.useState(initialValues.industryOption);
  const [llmOption, setLlmOption] = React.useState(initialValues.llmOption);
  const [selectedOption, setSelectedOption] = React.useState(initialValues.selectedOption);
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link>Info</Link>}
            description="Generic description of the Generative AI Chatbot."
            actions={
              <Button variant="primary">Button</Button>
            }
          >
            Chatbot
          </Header>

          <Alert>This chatbot may produce inaccurate information about people, places, or facts.</Alert>
        </SpaceBetween>
      }
    >
      <SpaceBetween direction="vertical" size="m">
      <Container
        header={
          <Header
            variant="h2"
            description="Select an industry and Large Language Model (LLM)"
          >
            Configure your ChatBot
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="xs">
        <FormField
          label="Industry"
        >
        <Select
          options={INDUSTRY_OPTIONS}
          placeholder="Select an industry"
          filteringType="auto"
          selectedOption={industryOption}
          onChange={({ detail }) =>
            setIndustryOption(detail.selectedOption)
          }
          selectedAriaLabel="Selected"
        />
        </FormField>
        <FormField
          label="Large Language Model"
        >
        <Select
          options={LLM_OPTIONS}
          placeholder="Select an LLM"
          filteringType="auto"
          selectedOption={llmOption}
          onChange={({ detail }) =>
            setLlmOption(detail.selectedOption)
          }
          selectedAriaLabel="Selected"
        />
        </FormField>
        </SpaceBetween>
      </Container>
      <Container
        header={
          <Header
            variant="h2"
            description="Write your question in the input box below"
          >
            Ask me anything
          </Header>
        }
      >
        <ChatBot />
      </Container>
      </SpaceBetween>
    </ContentLayout>
  );
}