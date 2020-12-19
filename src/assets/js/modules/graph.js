class Graph {
  constructor (opt = {}) {
    const { graphAreaId, graphChangeTrigger } = opt;
    this.graphAreaId = graphAreaId;
    this.graphChangeTrigger = graphChangeTrigger;
  }

  init () {
    this.bindEvents();
  }

  bindEvents () {
    $(document).on('click', this.graphChangeTrigger, () => {
      this.changeType();
    });
  }

  changeType () {
    const currentType = $(this.graphAreaId).attr('data-graph-type');
    const type = currentType === 'today' ? 'week' : 'today';

    $(this.graphAreaId).attr('data-graph-type', type);
  }
}

export default Graph;
