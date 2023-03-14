import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
//     const month = props.date.toLocaleString('en-US', { month: 'long' });
//   const day = props.date.toLocaleString('en-US', { day: '2-digit' });
//   const year = props.date.getFullYear();

//     const expenseDate = new Date(2023, 3, 8);
//     const expenseTitle = 'Car Insurance';
//     const expenseAmount = 294.67;
//   return (
//     <div className="expense-item">
//       <div>{expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
return (
    <div className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;