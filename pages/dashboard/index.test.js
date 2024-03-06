import firebase from 'firebase';

describe('handleSignOut', () => {
  it('should sign out the user and redirect to the home page', () => {
    // Mock the signOut method of firebase.auth()
    const signOutMock = jest.fn().mockResolvedValue();
    jest.spyOn(firebase.auth(), 'signOut').mockReturnValueOnce(signOutMock);

    // Mock the removeItem method of localStorage
    const removeItemMock = jest.spyOn(localStorage, 'removeItem');

    // Mock the window.location object
    delete window.location;
    window.location = { href: '' };

    // Call the handleSignOut function
    handleSignOut();

    // Assert that firebase.auth().signOut() was called
    expect(firebase.auth().signOut).toHaveBeenCalled();

    // Assert that localStorage.removeItem() was called with "user"
    expect(removeItemMock).toHaveBeenCalledWith('user');

    // Assert that window.location.href is set to "/"
    expect(window.location.href).toBe('/');

    // Restore the original window.location object
    window.location = undefined;
  });

  it('should log an error message if signOut fails', () => {
    // Mock the signOut method of firebase.auth() to throw an error
    const error = new Error('Sign out failed');
    jest.spyOn(firebase.auth(), 'signOut').mockRejectedValueOnce(error);

    // Mock the console.log method
    const consoleLogMock = jest.spyOn(console, 'log');

    // Call the handleSignOut function
    handleSignOut();

    // Assert that firebase.auth().signOut() was called
    expect(firebase.auth().signOut).toHaveBeenCalled();

    // Assert that console.log() was called with the error message
    expect(consoleLogMock).toHaveBeenCalledWith(error.message);
  });
});