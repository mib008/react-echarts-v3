import React from 'react';
import ReactDOM from 'react-dom';
import _isEqual from 'lodash.isequal';
import ResizeEvent from 'element-resize-event';


function wrapECharts(ECharts) {
  class IECharts extends React.Component {
    constructor(props) {
      // console.log('constructor', props);
      super(props);
      this.state = {
        // init: true
        instance: null
      };
      this._init = this._init.bind(this);
      this._update = this._update.bind(this);
      this._resize = this._resize.bind(this);
      this._getInstance = this._getInstance.bind(this);
      this._bind = this._bind.bind(this);
    }
    _init() {
      const that = this;
      // console.log('_init');
      // let instance = that._getInstance();
      // if (!instance) {
      if (!that.state.instance) {
        const dom = ReactDOM.findDOMNode(that);
        let instance = ECharts.getInstanceByDom(dom);
        if (!instance) {
          instance = ECharts.init(dom, that.props.theme);
        }
        if (that.props.loading) {
          instance.showLoading('default', that.props.optsLoading);
        }
        that._bind(instance);
        ResizeEvent(dom, that._resize);
        that.setState({
          // init: false
          instance: instance
        });
        that.props.onReady(instance);
      }
    }
    _update() {
      const that = this;
      // console.log('_update');
      that.state.instance.setOption(that.props.option, that.props.notMerge, that.props.lazyUpdate);
      // const instance = that._getInstance()
      // if (instance) {
      //   instance.setOption(that.props.option, that.props.notMerge, that.props.lazyUpdate);
      // }
    }
    _resize() {
      const that = this;
      // console.log('_resize');
      that.state.instance.resize();
      // const instance = that._getInstance()
      // if (instance) {
      //   instance.resize();
      // }
    }
    _getInstance() {
      const that = this;
      // console.log('_getInstance');
      return ECharts.getInstanceByDom(ReactDOM.findDOMNode(that));
    }
    _bind(instance) {
      const that = this;
      // console.log('_bind');
      const _on = function(name, func) {
        if (typeof func === 'function') {
          instance.off(name, func);
          instance.on(name, func);
        }
      };
      for (let e in that.props.onEvents) {
        if (Array.hasOwnProperty.call(that.props.onEvents, e)) {
          _on(e.toLowerCase(), that.props.onEvents[e]);
        }
      }
    }
    componentWillMount() {
      const that = this;
      // console.log('componentWillMount', that.props, that.state);
    }
    componentDidMount() {
      const that = this;
      // console.log('componentDidMount', that.props, that.state);
      that._init();
    }
    componentWillReceiveProps(nextProps) {
      const that = this;
      // console.log('componentWillReceiveProps', that.props, nextProps);
      if (that.state.instance && (that.props.loading !== nextProps.loading)) {
        if (nextProps.loading) {
          that.state.instance.showLoading('default', that.props.optsLoading);
        } else {
          that.state.instance.hideLoading();
        }
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      const that = this;
      // console.log('shouldComponentUpdate', that.props, nextProps, that.state, nextState);
      return (!that.state.instance || !_isEqual(nextProps.option, that.props.option));
      // return (that.state.init || !_isEqual(nextProps.option, that.props.option));
    }
    componentWillUpdate(nextProps, nextState) {
      const that = this;
      // console.log('componentWillUpdate', that.props, nextProps, that.state, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
      const that = this;
      // console.log('componentDidUpdate', prevProps, that.props, prevState, that.state);
      if (that.props.option) {
        that._update();
        that._resize();
      }
    }
    componentWillUnmount() {
      const that = this;
      // console.log('componentWillUnmount', that.props, that.state);
      that.state.instance.dispose();
      // const instance = that._getInstance()
      // if (instance) {
      //   instance.dispose();
      // }
    }
    render() {
      const that = this;
      // console.log('render');
      return (
        <div className={that.props.className} style={that.props.style}></div>
      );
    }
  }

  IECharts.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    theme: React.PropTypes.string,
    option: React.PropTypes.object.isRequired,
    notMerge: React.PropTypes.bool,
    lazyUpdate: React.PropTypes.bool,
    onReady: React.PropTypes.func,
    loading: React.PropTypes.bool,
    optsLoading: React.PropTypes.object,
    onEvents: React.PropTypes.object
  };

  IECharts.defaultProps = {
    className: 'react-echarts',
    style: { width: '100%', height: '100%' },
    notMerge: false,
    lazyUpdate: false,
    onReady: function(instance) {},
    loading: false,
    optsLoading: {
      text: 'loading',
      color: '#c23531',
      textColor: '#000',
      maskColor: 'rgba(255, 255, 255, 0.8)',
      zlevel: 0
    },
    onEvents: {}
  };

  return IECharts;
}

export default wrapECharts;
