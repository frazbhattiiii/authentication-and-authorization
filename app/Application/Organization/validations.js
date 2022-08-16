import validationService from "../Validation/ValidationService"; 
export const organizationValidation=(dto)=>{
  const {orgId,userId,name,type}=dto;
  const Name = !validationService.checkEmpty(name);
  const Type = !validationService.checkEmpty(type);

  const NameLength = !validationService.validateLength(name, 5, 40);
  const TypeLength = !validationService.validateLength(type, 5, 150);

  if ((Name && Type)) {
    if ((NameLength && TypeLength)) {
      return true;
    } else {
      return {status: 400, message: "Please Enter Valid Lengths"};
    }
  } else {
    return {status: 400, message: "Please Enter All Values"};
  }
};
