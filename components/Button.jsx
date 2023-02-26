function ButtonSubmit(props) {
  return (
    <div>
      <button
        className={`py-2 px-5 border-2 justify-between ${`border-${props.outline} : border-green-500`} ${`text-${props.text} : text-green-500`} hover:text-white ${`bg-${props.bg} : hover:bg-green-700`} duration-200 rounded-full focus:ring-4 focus:ring-green-300`}
        type="submit"
      >
        {props.name}
      </button>
    </div>
  );
}

function ButtonIndex(props) {
  return <div></div>;
}

export { ButtonSubmit, ButtonIndex };
