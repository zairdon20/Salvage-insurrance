import React, { useState } from 'react';
import Card from './Card';
import fetchData from './Utils'

import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiButton,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiCodeBlock,
  EuiCard,
  EuiIcon
} from '@elastic/eui';

// eslint-disable-next-line import/no-anonymous-default-export
const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <h1>Modal title</h1>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          This modal has the following setup:
          <EuiSpacer />
          <EuiCodeBlock language="html" isCopyable>
            {`<EuiModal onClose={closeModal}>
              <EuiModalHeader>
                <EuiModalHeaderTitle><h1><!-- Modal title --></h1></EuiModalHeaderTitle>
              </EuiModalHeader>

              <EuiModalBody>
                <!-- Modal body -->
              </EuiModalBody>

              <EuiModalFooter>
                <EuiButton onClick={closeModal} fill>
                  Close
                </EuiButton>
              </EuiModalFooter>
            </EuiModal>`}
          </EuiCodeBlock>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton onClick={closeModal} fill>
            Close
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

  const cardFooterContent = (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiButton onClick={showModal}>Go for it</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  const buttons = [
    'primary',
    'success',
    'warning',
    'danger',
    'text',
    'accent',
    'disabled',
  ];

  return <EuiProvider colorMode="light">
    {modal}
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <h3>Insurancee</h3>
        {
          buttons.map((button) => <EuiButton key={button} iconType="heart">button</EuiButton>)
        }
      </EuiFlexItem>

      <EuiFlexItem>
        <EuiFlexGroup responsive={true} wrap gutterSize='s'>
          {
            buttons.map((button) => <EuiFlexItem key={button} style={{ minWidth: 300 }}>
              <EuiCard
                icon={<EuiIcon type="logoElastic" size="xl" />}
                title={button}
                isDisabled={false}
                description="Some really cool description right here. Make it count."
                footer={cardFooterContent}
              />
            </EuiFlexItem>)
          }
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  </EuiProvider>
}


export default Dashboard
// const Main = async () => {
//   const navigate = useNavigate()

//   onAuthStateChanged(auth, (user) => {
//     if (!user) {
//       navigate("/LoginForm")
//     }
//   })

//   const { euiTheme } = useEuiTheme();

//   const data = await fetchData()

//   console.log(data);

//   console.log("dfghjkl");

//   return (
//     <EuiText>
//       <p>
//         <EuiIcon
//           type="stopFilled"
//           size="xxl"
//           css={{ color: euiTheme.colors.primary }}
//         />{' '}
//         This primary color will adjust based on the light or dark theme value
//       </p>

//       <p
//         css={css`
//           background: ${euiTheme.colors.dangerText};
//           padding: calc(${euiTheme.size.base} * 2);
//         `}
//         >The padding of this box is created using <EuiCode>calc()</EuiCode>{' '}
//         because EUI&apos;s theme sizes are string pixel values that are
//         calculated off the theme&apos;s <EuiCode>base</EuiCode>
//       </p>
//     </EuiText>
//   );
// }

// export default Main


class SubmitButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    );
  }
} 