module.exports = {
  validUser: {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  },
  expectedUserData: {
    email: process.env.USER_EMAIL,
    firstname: 'Marwen',
    lastname: null,
    avatar: {
      url: 'https://cdn-images.welcometothejungle.com/3MmWLVE5PpCIrTFjhkgh5IgaCnmjbrbNFLbrLJMRLK8/rs:auto:2000::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9pbWFnZV9wcm9maWxlLmpwZw',
      small: 'https://cdn-images.welcometothejungle.com/P4k3L_NTJdIA8nmynXrCYsj1du4Q5_bsH8jI_xH2ktA/rs:auto:500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9pbWFnZV9wcm9maWxlLmpwZw',
      thumb: 'https://cdn-images.welcometothejungle.com/Fnmhl-D2HKcWK3xjt_W_N6MEYHhDKh9S_svLnvgkr9g/rs:auto:100::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9hcHBsaWNhbnRzL2UwMDAwNzI2ZjcvYXZhdGFycy9pbWFnZV9wcm9maWxlLmpwZw',
    }
  }
};
