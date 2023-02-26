import { Module } from '../core/module';

export class ClickAnalyticsModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const clickAnalytics = document.querySelector('body')
    let clickCounting = 0
    let doubleClickCounting = 0
    setTimeout(() => {
    clickAnalytics.addEventListener('click', () => {
      clickCounting += 1
    })
    clickAnalytics.addEventListener('dblclick',() => {
      doubleClickCounting += 1
    })
  }, 100)
    setTimeout(() => {
    alert(`Одинарных нажатий было сделано ${clickCounting - doubleClickCounting * 2}, а двойных нажатий ${doubleClickCounting}`)
    }, 4 * 1000)
  }
}
