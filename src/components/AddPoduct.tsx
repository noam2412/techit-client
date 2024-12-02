import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import { Product } from "../interfaces/Product";
import * as yup from "yup";
import { addProduct } from "../services/productsService";

interface AddProductProps {
    onHide: Function;
    refresh: Function;
}
 
const AddProduct: FunctionComponent<AddProductProps> = ({onHide, refresh}) => {
    const formik: FormikValues = useFormik<Product>({
        initialValues: {
          name: "",
          price: 0,
          category: "",
          description: "",
          image: "",
        },
        validationSchema: yup.object({
          name: yup.string().required().min(2),
          price: yup.number().required().moreThan(0),
          category: yup.string().required().min(2),
          description: yup.string().required().min(2),
          image: yup.string().required().url(),
        }),
        onSubmit: (values) => {
          addProduct({...values, available: true}).then(() => {
            onHide()
            refresh()
            alert("Product was added successfuly!");
          }).catch((err) => console.log(err));
        },
      });
    return <>
    <div className="container w-75">
    <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mt-3
        mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Laptop "
            name="name"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="name">Name</label>
          {formik.touched.name && formik.errors.name && <p className="text-danger">{formik.errors.name}</p>}
        </div>
        <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="name@example.com"
              name="price"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="price">Price</label>
            {formik.touched.price && formik.errors.price && (
              <p className="text-danger">{formik.errors.price}</p>
            )}
          </div>
        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="category">category</label>
          {formik.touched.category && formik.errors.category && <p className="text-danger">{formik.errors.category}</p>}
        </div>
        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="description">description</label>
          {formik.touched.description && formik.errors.description && <p className="text-danger">{formik.errors.description}</p>}
        </div>
        <div className="form-floating mt-3 w-100">
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="image"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="image">image</label>
          {formik.touched.image && formik.errors.image && <p className="text-danger">{formik.errors.image}</p>}
        </div>
        <button className="btn btn-success mt-3 w-100" type= "submit" disabled={!formik.dirty || !formik.isValid}>Add</button>
      </form>
<p>

</p>
      </div>
    </>;
}
 
export default AddProduct;



