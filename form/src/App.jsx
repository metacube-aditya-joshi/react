import { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
 
function App() {
  const { register, handleSubmit, resetField } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setLoading(true); // Show loader
    resetDataForm();
    console.log(data);

    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds (simulating a network request)
    }, 2000);

  });

  const resetDataForm = () => {
    resetField("firstName");
    resetField("lastName");
    resetField("age");
    resetField("email");
    resetField("phone");
    resetField("gender");
    resetField("image");
  };

  const onClear = () => {
    resetDataForm();
  };

  return (
    <div className="form">
      {loading && <div className="loader">Loading...</div>}
      <input
        {...register("firstName", { maxLength: 20, required: true })}
        type="text"
        placeholder="First Name"
      />
      <input
        {...register("lastName", { maxLength: 20, required: true })}
        type="text"
        placeholder="Last Name"
      />
      <input
        {...register("age", { min: 18, max: 99, required: true })}
        type="number"
        placeholder="Age"
      />
      <input
        {...register("email", { maxLength: 25, required: true })}
        type="text"
        placeholder="Email"
      />
      <input {...register("phone", { maxLength: 10 })} type="number" placeholder="Phone" />
      <select {...register("gender", { required: true })}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="file" {...register("image")} />
      <div className="buttons">
        <button onClick={onSubmit} disabled={loading}>Submit</button>
        <button onClick={onClear} disabled={loading}>Clear</button>
      </div>
    </div>
  );
}

export default App;
