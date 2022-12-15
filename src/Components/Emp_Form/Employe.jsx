import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Modal, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Employe({ empId, handleClose, ischanged, setIsChanged }) {
  const [teamOptions, setTeamOptions] = React.useState([{ key: "", text: "" }]);
  const initialValues = {
    id: "",
    employeeName: "",
    birthDate: "",
    gender: "",
    passportNo: 0,
    mobilenumber: 0,
    presentAddress: "",
    fatherName: "",
    bloodGroup: "",
    maritalStatus: "",
    aadharNumber: 0,
    status: "",
    cardNo: 0,
    role: "",
    email: "",
    permanentAaddress: "",
    bankAccountNo: 0,
    accountHolderName: "",
    panNo: "",
    bankName: "",
    ifcsCode: "",
    bankAddress: "",
    candidatePhoto: undefined,
    candidateSignature: undefined,
    team: "",
  };

  useEffect(() => {
    axios.get(`https://localhost:7071/api/CrudApi/Team`).then((res) => {
      let data = res.data.map((el) => ({ key: el.id, text: el.name }));
      setTeamOptions(data);
    });
  }, []);
  useEffect(() => {
    if (empId) {
      axios.get(`https://localhost:7071/api/CrudApi/${empId}`).then((res) => {
        //console.log(res);
        formik.setValues(res.data);
      });
    }
  }, [empId]);

  const postt = (data) => {
    axios
      .post(`https://localhost:7071/api/CrudApi`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsChanged(!ischanged); 
        handleClose();
        console.log("Dekho Data", data);
        return res.data;
      });
  };

  const putt = (empId, data) => {
    delete data.photo;
    delete data.signature;

    axios
      .put(`https://localhost:7071/api/CrudApi/${empId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsChanged(!ischanged);
        handleClose();
      });
  };

  //useformik...............

  const onSubmit = (values) => {
    postt(values);
  };

  const validationSchema = Yup.object({
    employeeName: Yup.string().required("Required!"),
    birthDate: Yup.string().required("Required!"),
    gender: Yup.string().required("Required!"),
    passportNo: Yup.string().required("Required!"),
    mobilenumber: Yup.string().required("Required!"),
    presentAddress: Yup.string().required("Required!"),
    fatherName: Yup.string().required("Required!"),
    bloodGroup: Yup.string().required("Required!"),
    maritalStatus: Yup.string().required("Required!"),
    aadharNumber: Yup.string().required("Required!"),
    status: Yup.string().required("Required!"),
    cardNo: Yup.string().required("Required!"),
    role: Yup.string().required("Required!"),
    email: Yup.string().required("Required!"),
    permanentAaddress: Yup.string().required("Required!"),
    bankAccountNo: Yup.string().required("Required!"),
    accountHolderName: Yup.string().required("Required!"),
    panNo: Yup.string().required("Required!"),
    bankName: Yup.string().required("Required!"),
    ifcsCode: Yup.string().required("Required!"),
    bankAddress: Yup.string().required("Required!"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Modal size="xl" show={true} onHide={handleClose}>
        <Modal.Body>
          <Row>
            <Col Col lg={2}>
              <h6>Basic Informations</h6>
            </Col>
            <Col lg={8}>
              <hr />
            </Col>
            <Col lg={2}>
              <Button
                variant="outline-primary mx-1"
                onClick={() => {
                  formik.validateForm();
                  if (Object.keys(formik.errors).length === 0) {
                    if (empId) {
                      putt(empId, formik.values);
                    } else {
                      postt(formik.values);
                    }
                  } else {
                    console.log(formik.errors);
                  }
                }}
              >
                <AiOutlineSave />
              </Button>
              <Button variant="outline-danger" onClick={handleClose}>
                <AiOutlineClose />
              </Button>
            </Col>
          </Row>
          <Form>
            <Row className="pt-2">
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <Form.Label>Employee Name*</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      size="sm"
                      name="employeeName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.employeeName}
                    />
                    {formik.touched.employeeName ||
                    formik.errors.employeeName ? (
                      <div className="error">{formik.errors.employeeName}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Birth Date</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="date"
                      size="sm"
                      name="birthDate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.birthDate}
                    />
                    {formik.touched.birthDate || formik.errors.birthDate ? (
                      <div className="error">{formik.errors.birthDate}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Gender</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Select
                      size="sm"
                      name="gender"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.gender}
                    >
                      <option>Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Select>
                    {formik.touched.gender || formik.errors.gender ? (
                      <div className="error">{formik.errors.gender}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Passport No</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      size="sm"
                      name="passportNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.passportNo}
                    />
                    {formik.touched.passportNo || formik.errors.passportNo ? (
                      <div className="error">{formik.errors.passportNo}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Mobile No</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      size="sm"
                      name="mobilenumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.mobilenumber}
                    />
                    {formik.touched.mobilenumber ||
                    formik.errors.mobilenumber ? (
                      <div className="error">{formik.errors.mobilenumber}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Present Address</Form.Label>
                  </Col>
                  <Col lg={8}>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="presentAddress"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.presentAddress}
                    ></textarea>
                    {formik.touched.presentAddress ||
                    formik.errors.presentAddress ? (
                      <div className="error">
                        {formik.errors.presentAddress}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Select Team</Form.Label>
                  </Col>
                  <Col lg={4} className="px-0">
                    <Form.Select
                      size="sm"
                      name="team"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.team}
                    >
                      {teamOptions.map((el) => {
                        return <option value={el.key}>{el.text}</option>;
                      })}
                    </Form.Select>
                    {formik.touched.team || formik.errors.team ? (
                      <div className="error">{formik.errors.team}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Candidate's Photo</Form.Label>
                  </Col>
                  <Col lg={8}>
                    <Form.Control
                      type="file"
                      size="sm"
                      name="candidatePhoto"
                      onChange={(e) => {
                        formik.setFieldValue(
                          "candidatePhoto",
                          e.target.files[0]
                        );
                        formik.setFieldValue(
                          "ph1",
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <img src={formik.values.ph1} style={{ height: "100px" }} />
                    {formik.touched.candidatePhoto ||
                    formik.errors.candidatePhoto ? (
                      <div className="error">
                        {formik.errors.candidatePhoto}
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <Form.Label>Father Name</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      size="sm"
                      name="fatherName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.fatherName}
                    />
                    {formik.touched.fatherName || formik.errors.fatherName ? (
                      <div className="error">{formik.errors.fatherName}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Blood Group</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Select
                      size="sm"
                      name="bloodGroup"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.bloodGroup}
                    >
                      <option>Select</option>
                      <option value="O-">O-</option>
                      <option value="B+">B+</option>
                      <option value="A-">A-</option>
                      <option value="A+">A+</option>
                    </Form.Select>
                    {formik.touched.bloodGroup || formik.errors.bloodGroup ? (
                      <div className="error">{formik.errors.bloodGroup}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Marital Status</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Select
                      size="sm"
                      name="maritalStatus"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.maritalStatus}
                    >
                      <option>Select</option>
                      <option value="Married">Married</option>
                      <option value="Unmarried">Unmarried</option>
                    </Form.Select>
                    {formik.touched.maritalStatus ||
                    formik.errors.maritalStatus ? (
                      <div className="error">{formik.errors.maritalStatus}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Aadhar Number</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      size="sm"
                      name="aadharNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.aadharNumber}
                    ></Form.Control>
                    {formik.touched.aadharNumber ||
                    formik.errors.aadharNumber ? (
                      <div className="error">{formik.errors.aadharNumber}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Card No/Role</Form.Label>
                  </Col>
                  <Col lg={3} className="px-0">
                    <Form.Select
                      size="sm"
                      className="text-primary"
                      name="status"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.status}
                    >
                      <option>Select</option>
                      <option value="Active">Active</option>
                    </Form.Select>
                    {formik.touched.status && formik.errors.status ? (
                      <div className="error">{formik.errors.status}</div>
                    ) : null}
                  </Col>
                  <Col lg={3} className="px-0">
                    <Form.Control
                      type="text"
                      size="sm"
                      name="cardNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.cardNo}
                    ></Form.Control>
                    {formik.touched.cardNo || formik.errors.cardNo ? (
                      <div className="error">{formik.errors.cardNo}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="">
                  <Col lg={4}></Col>
                  <Col lg={4} className="px-0">
                    <Form.Select
                      size="sm"
                      name="role"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.role}
                    >
                      <option>Select</option>
                      <option value="Employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="Traniee">Traniee</option>
                    </Form.Select>
                    {formik.touched.role || formik.errors.role ? (
                      <div className="error">{formik.errors.role}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Email</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="email"
                      placeholder=""
                      size="sm"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.email}
                    />
                    {formik.touched.email || formik.errors.email ? (
                      <div className="error">{formik.errors.email}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Parmanent Address</Form.Label>
                  </Col>
                  <Col lg={7}>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="permanentAaddress"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.permanentAaddress}
                    ></textarea>
                    {formik.touched.permanentAaddress ||
                    formik.errors.permanentAaddress ? (
                      <div className="error">
                        {formik.errors.permanentAaddress}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}></Col>
                  <Col lg={1}>
                    <Form.Check
                      type="checkbox"
                      placeholder=""
                      size="sm"
                      onChange={formik.handleChange}
                    />
                  </Col>
                  <Col lg={6} className="px-0">
                    <Form.Label>Same as Present Address</Form.Label>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Candidate's Signature</Form.Label>
                  </Col>
                  <Col lg={8}>
                    <Form.Control
                      type="file"
                      size="sm"
                      name="candidateSignature"
                      onChange={(e) => {
                        formik.setFieldValue(
                          "candidateSignature",
                          e.target.files[0]
                        );
                        formik.setFieldValue(
                          "ph2",
                          URL.createObjectURL(e.target.files[0])
                        );
                      }}
                    />
                    <img src={formik.values.ph2} style={{ height: "100px" }} />
                    {formik.touched.candidateSignature ||
                    formik.errors.candidateSignature ? (
                      <div className="error">
                        {formik.errors.candidateSignature}
                      </div>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col lg={2}>
                <h6>Bank Details</h6>
              </Col>
              <Col lg={10}>
                <hr />
              </Col>
            </Row>

            <Row className="pt-2">
              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <Form.Label>Bank Accout No</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      size="sm"
                      name="bankAccountNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.bankAccountNo}
                    />
                    {formik.touched.bankAccountNo ||
                    formik.errors.bankAccountNo ? (
                      <div className="error">{formik.errors.bankAccountNo}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Account Holder Name</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      size="sm"
                      name="accountHolderName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.accountHolderName}
                    />
                    {formik.touched.accountHolderName ||
                    formik.errors.accountHolderName ? (
                      <div className="error">
                        {formik.errors.accountHolderName}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Pan No</Form.Label>
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      size="sm"
                      name="panNo"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.panNo}
                    />
                    {formik.touched.panNo || formik.errors.panNo ? (
                      <div className="error">{formik.errors.panNo}</div>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg={6}>
                <Row>
                  <Col lg={4}>
                    <Form.Label>Bank Name/IFSC Code</Form.Label>
                  </Col>
                  <Col lg={3} className="px-0">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="Bank Name"
                      name="bankName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.bankName}
                    ></Form.Control>
                    {formik.touched.bankName || formik.errors.bankName ? (
                      <div className="error">{formik.errors.bankName}</div>
                    ) : null}
                  </Col>
                  <Col lg={3} className="px-0">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="IFSC Code"
                      name="ifcsCode"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.ifcsCode}
                    ></Form.Control>
                    {formik.touched.ifcsCode || formik.errors.ifcsCode ? (
                      <div className="error">{formik.errors.ifcsCode}</div>
                    ) : null}
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col lg={4}>
                    <Form.Label>Bank Address</Form.Label>
                  </Col>
                  <Col lg={7} className="px-0">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="bankAddress"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values?.bankAddress}
                    ></textarea>
                    {formik.touched.bankAddress || formik.errors.bankAddress ? (
                      <div className="error">{formik.errors.bankAddress}</div>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Employe;
