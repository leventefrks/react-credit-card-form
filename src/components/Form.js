import PropTypes from 'prop-types';
import {
  CREDIT_CAR_EXPIRATION_MONTH,
  CREDIT_CAR_EXPIRATION_YEAR,
} from './../constants';
import CustomSelect from './CustomSelect';

const Form = ({
  cardNumber,
  expirationYear,
  expirationMonth,
  onChangeCardNumber,
  onChangeCvv,
  onFocusCvv,
  onChangeName,
  onSubmit,
  onChangeExpirationMonth,
  onChangeExpirationYear,
}) => {
  return (
    <form
      className="w-full bg-white p-2 md:p-6 space-y-3 rounded-bl-xl rounded-br-xl"
      onSubmit={onSubmit}
    >
      <div>
        <label
          htmlFor="card-number"
          className="form-label capitalize select-none"
        >
          card number
        </label>
        <input
          type="text"
          name="card-number"
          id="card-number"
          autoComplete="off"
          value={cardNumber}
          className="form-input"
          onChange={onChangeCardNumber}
        />
      </div>
      <div>
        <label htmlFor="name" className="form-label capitalize select-none">
          card holder
        </label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength="26"
          autoComplete="off"
          className="form-input"
          onChange={onChangeName}
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 md:items-end space-y-4 md:space-y-0">
        <div className="flex-1 relative">
          <label
            htmlFor="expiration-date"
            className="form-label capitalize select-none"
          >
            expiration date
          </label>
          <CustomSelect
            value={expirationMonth}
            onChange={onChangeExpirationMonth}
            label="expiration-month"
            list={CREDIT_CAR_EXPIRATION_MONTH}
          />
        </div>
        <div className="flex-1 relative">
          <CustomSelect
            value={expirationYear}
            onChange={onChangeExpirationYear}
            label="expiration-year"
            list={CREDIT_CAR_EXPIRATION_YEAR}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="form-label uppercase select-none">
            cvv
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            autoComplete="off"
            onChange={onChangeCvv}
            onFocus={onFocusCvv}
            onBlur={onFocusCvv}
            maxLength="3"
            className="form-input"
          />
        </div>
      </div>
      <button className="btn">save card details</button>
    </form>
  );
};

Form.propTypes = {
  cardNumber: PropTypes.string,
  expirationMonth: PropTypes.string,
  onChangeCardNumber: PropTypes.func,
  onChangeExpirationMonth: PropTypes.func,
  onChangeExpirationYear: PropTypes.func,
  onChangeCvv: PropTypes.func,
  onFocusCvv: PropTypes.func,
  onChangeName: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
