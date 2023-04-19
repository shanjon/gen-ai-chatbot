import React, { useState } from "react";
import Wizard from "@cloudscape-design/components/wizard";
import { 
    Link,
    Container,
    Header,
    SpaceBetween,
    FormField,
    Input,
    ColumnLayout,
    Box,
    Button,
    Select } from "@cloudscape-design/components";

import { LLM_OPTIONS, INDUSTRY_OPTIONS } from "../resources/data-options";
    

export default () => {
  const [
    activeStepIndex,
    setActiveStepIndex
  ] = React.useState(0);
  const initialValues = {
    industryOption: "Financial Services",
    llmOption: "Anthropic Claude"
  }
  const [industryOption, setIndustryOption] = useState([]);
  const [llmOption, setLlmOption] = useState([]);
  const [selectedOption, setSelectedOption] = React.useState(initialValues.selectedOption);
  return (
    <Wizard
      i18nStrings={{
        stepNumberLabel: stepNumber =>
          `Step ${stepNumber}`,
        collapsedStepsLabel: (stepNumber, stepsCount) =>
          `Step ${stepNumber} of ${stepsCount}`,
        skipToButtonLabel: (step, stepNumber) =>
          `Skip to ${step.title}`,
        navigationAriaLabel: "Steps",
        cancelButton: "Cancel",
        previousButton: "Previous",
        nextButton: "Next",
        submitButton: "Launch instance",
        optional: "optional"
      }}
      onNavigate={({ detail }) =>
        setActiveStepIndex(detail.requestedStepIndex)
      }
      activeStepIndex={activeStepIndex}
      steps={[
        {
          title: "Configure your ChatBot",
          info: <Link variant="Info">Info</Link>,
          description:
            "Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
          content: (
            <Container
              header={
                <Header variant="h2">
                  Form container header
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="ChatBot name">
                  <Input />
                </FormField>
                <FormField label="Industry">
                <Select
                options={INDUSTRY_OPTIONS}
                selectedOption={selectedOption}
                onChange={({ detail }) =>
                    {setIndustryOption(detail.selectedOption.value)
                    setSelectedOption(detail.selectedOption)}
                }
                selectedAriaLabel="Selected"
                />
                </FormField>
                <FormField label="LLM">
                <Select
                options={LLM_OPTIONS}
                llmOption={llmOption}
                onChange={({ detail }) =>
                    setLlmOption(detail.llmOption)
                }
                selectedAriaLabel="Selected"
                />
                </FormField>
              </SpaceBetween>
            </Container>
          )
        },
        {
          title: "Review and launch",
          content: (
            <SpaceBetween size="xs">
              <Header
                variant="h3"
                actions={
                  <Button
                    onClick={() => setActiveStepIndex(0)}
                  >
                    Edit
                  </Button>
                }
              >
                Step 1: Instance type
              </Header>
              <Container
                header={
                  <Header variant="h2">
                    Container title
                  </Header>
                }
              >
                <ColumnLayout
                  columns={2}
                  variant="text-grid"
                >
                  <div>
                    <Box variant="awsui-key-label">
                      First field
                    </Box>
                    <div>Value</div>
                  </div>
                  <div>
                    <Box variant="awsui-key-label">
                      Second Field
                    </Box>
                    <div>Value</div>
                  </div>
                </ColumnLayout>
              </Container>
            </SpaceBetween>
          )
        }
      ]}
    />
  );
}