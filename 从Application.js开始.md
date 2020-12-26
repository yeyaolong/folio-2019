从Application.js开始


```javascript
// Applicatoin.js 的构造器
constructor(_options)
    {
        // Options
        // 设定动画在index.html的哪个canvas里运行
        this.$canvas = _options.$canvas	

        // Set up
        this.time = new Time()	// 时间函数,设定 动画帧的时间 
        this.sizes = new Sizes() // 设定canvas大小和resize函数
        this.resources = new Resources() // 获取资源三维动画需要的资源 .glb文件

        this.setConfig()    // 配置
        this.setDebug()
        this.setRenderer()
        this.setCamera()
        this.setPasses()
        this.setWorld()
        this.setTitle()
    }
```
接下来我们将一个一个讲述里面的内容.
## EventEmitter.js 事件类
在介绍函数前，需要读一读EventMItter，因为Utils 中的函数都继承了这个类.

```javascript
// utils/EventEmitter.js
export default class
{
    /**
     * Constructor
     */
    constructor()
    {
        this.callbacks = {}
        this.callbacks.base = {}
    }

    /**
     * On
     */
    on(_names, callback)
    {
       
    }

    /**
     * Off
     */
    off(_names)
    {
        
    }

    /**
     * Trigger
     */
    trigger(_name, _args)
    {
       
    }

    /**
     * Resolve names
     */
    resolveNames(_names)
    {       
    }

    /**
     * Resolve name
     */
    resolveName(name)
    {
        
    }
}

```
我们从 trigger()函数开始读
```javascript


```
## time
```javascript
src/javascript/Utils/Time.js
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
        this.ticker = window.requestAnimationFrame(this.tick)

        const current = Date.now()

        this.delta = current - this.current
        this.elapsed = current - this.start
        this.current = current

        if(this.delta > 60)
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

```