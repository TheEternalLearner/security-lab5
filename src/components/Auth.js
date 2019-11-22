export const userTypes = {
    GUEST: "guest",
    ADMIN: "admin",
    RESIDENTIAL_REPRESENTATIVE: "Residential",
    BUSINESS_REPRESENTATIVE: "Business",
};

export const setUserType = (userType) => {
    if (userType === userTypes.GUEST) {
        sessionStorage.removeItem("userType")
    } else {
        sessionStorage.setItem("userType", userType);
    }
};

export const getUserType = () => {
    const userType = sessionStorage.getItem("userType");
    if (!userType) {
        return userTypes.GUEST;
    }
    else {
        return userType;
    }
};
