import React from 'react';
import Card from './Card';
import fetchData from './Utils'

// eslint-disable-next-line import/no-anonymous-default-export
const Dashboard = async () => {
  const data = await fetchData()
  const mData = data.data.data

  console.log(mData);

  // const foo = mData.map(_ => {
  //   return <Card name={_.name} id={_()} key={i} />
  // })

  return <div className="Dashboard">
    <nav>
      <h3>Finapp</h3>

      <div>
        <h3>Dashboard</h3>
        <p>Invoice</p>
        <p>Wallets</p>
        <p>Reports</p>
        <p>Transactions</p>
        <hr></hr>
        <p>Settings</p>
        <p>Help</p>
        <p>Log Out</p>
      </div>
      <section>
        <div>
          <img src="" alt="#" />
          <div>
            <h4><b>Total Balance</b></h4>
            <p>+ $28 55 </p>
            <h6>Last Transactions</h6>
            <p>Top Up</p>
            <p>WITHDRAW</p>
            <h1>$200.58</h1>
            <h6>Wallets Amount</h6>
          </div>
          <div>
            <p><b>Report</b></p>
            <imag src="" alt="#" />
          </div>
          <div>
            <h6>Total Income</h6>
            <p>$ 18532.52</p>
          </div>
          <div>
            <h6>Total Savings</h6>
            <p>$ 18532.52</p>
          </div>
          <div>
            <h6>Total Expense</h6>
            <p>$ 18532.52</p>
          </div>
          <div>
            <h6>Total Upcoming</h6>
            <p>$ 18532.52</p>
          </div>
          <div>
            <p>Last Transactions</p>
            <a href="#">Icon</a>
            <h6>Transfer to Johdi <br />personal payment</h6>
            <p>-$ 35.00</p>
            <h6>Nike <br /> Shopping</h6>
            <p>-$128.00</p>
            <h6>Mobile Phone Top Up <br />Communication</h6>
            <p>-10.00</p>
            <h6>Balance Top-up <br />personal Payment</h6>
            <p>+$300.58</p>
            <h6>Withdrawal <br />Personal Payment</h6>
            <p>-$35.00</p>
          </div>
          <div>
            <p>Spending This Month</p>
            <a href="#">Icon</a>
            <h1>$138.00</h1>
            <p>Spend This Month</p>
          </div>
        </div>
      </section>
    </nav>

    {/* {foo} */}
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