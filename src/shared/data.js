class Data {
  async getTitle(value, setRelatedList) {
    const result = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${value}`,
    ); //
    const response = await result.json();
    const data = response.hits;

    setRelatedList(data);
  }
}

export default Data;
