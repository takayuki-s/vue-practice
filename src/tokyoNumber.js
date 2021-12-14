export const tokyoNumber = {
  data() {
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city",
      number: 0,
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
};
