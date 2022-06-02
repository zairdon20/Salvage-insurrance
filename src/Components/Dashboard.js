import React from 'react'
import Card from './Card';

// eslint-disable-next-line import/no-anonymous-default-export
const Dashboard = () => {
  const arr = [
    {},
    {}
  ]

  const foo = arr.map((_, i) => <Card key={i} />)

  return <div>
    {foo}
  </div>
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