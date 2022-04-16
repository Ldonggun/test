class Data {
  async getTitle(value, setRelatedList) {
    const result = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${value}`,
    ); //
    const response = await result.json();
    const data = response.hits;

    setRelatedList(data);
  }

  async getComment(id, setData) {
    const result = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
    const response = await result.json();

    setData(response);
  }
}

export default Data;
