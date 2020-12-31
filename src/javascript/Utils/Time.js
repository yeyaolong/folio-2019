import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter
{
    /**
     * Constructor
     */
    constructor()
    {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        this.tick = this.tick.bind(this)
        this.tick()
    }

    /**
     * Tick
     */
    tick()
    {
        this.ticker = window.requestAnimationFrame(this.tick)   // threejs方法 用于实现帧动画.本质上是setInterval函数.

        const current = Date.now()

        this.delta = current - this.current // 上一帧与这一帧的时间间隔，理解为刷新率
        this.elapsed = current - this.start // 动画已经运行的总时长
        this.current = current

        if(this.delta > 60) // 
        {
            this.delta = 60
        }

        this.trigger('tick')
    }

    /**
     * Stop
     */
    stop()
    {
        window.cancelAnimationFrame(this.ticker)
    }
}
