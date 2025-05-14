function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let isLocked = false;

  const loginAttempt = (passwordAttempt) => {
      if (isLocked) {
          return "Account locked due to too many failed login attempts";
      }

      attemptCount++;

      if (passwordAttempt === userInfo.password) {
          return "Login successful";
      }

      if (attemptCount >= 3) {
          isLocked = true;
          return "Attempt 3: Login failed";
      }

      return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};