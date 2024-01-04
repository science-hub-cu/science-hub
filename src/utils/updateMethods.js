import UserService from "../services/UserService";
import { isValidDepartment,isValidLevel } from "../validations/CommonValidation"; 
const updateDepLev = async (
  department,
  level,
  addError,
  setShowOverlay,
  btn
) => {
  try {
    setShowOverlay(true); // Show the overlay

    if (isValidDepartment(department.label) && isValidLevel(level.label)) {
      await UserService.changeDepartment(department.label);
      await UserService.changeLevel(level.label);
    } else {
      if (!isValidDepartment(department.label)) {
        addError({
          department: "Enter your department",
        });
      }
      if (!isValidLevel(level.label)) {
        addError({
          level: "Enter your level",
        });
      }
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle the 401 error here
      // setInvalid("please choose your department and level ");
    }
    console.log(error);
  } finally {
    btn.current?.setLoading(false);
    setShowOverlay(false); // Hide the overlay
  }
};

export default updateDepLev;
