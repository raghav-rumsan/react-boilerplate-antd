import { Select } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLocale } from "../../container/selectors";
import { setLocale } from "../../container/actions";

const { Option } = Select;

const Locale = ({ locale, setLocale }) => {
  const onLocaleChange = (value) => {
    console.log(`value`, value);
    setLocale(value);
    localStorage.setItem("locale", value);
  };

  return (
    <div>
      <Select
        onChange={onLocaleChange}
        defaultValue={locale}
        placeholder={locale}
        style={{ width: 90 }}
      >
        <Option value="enUS">English</Option>
        <Option value="neNP">Nepali</Option>
        <Option value="hiIN">Hindi</Option>
      </Select>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
});

const mapDispatchToProps = {
  setLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(Locale);
