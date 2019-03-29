import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class DialogComponent extends Vue {
  public isOpen: boolean = false;
  public title: string = 'default title';
  public content: string = 'default content';
  public positiveAnswer: string = 'default confirm';
  public negativeAnswer: string = 'default cancel';

  public open() {
    console.log('inner open');
  }
  public cancel() {
    this.isOpen = false;
  }
  public confirm() {
    //
    this.isOpen = false;
  }
  public setConfirmListener() {
    //
  }
}
