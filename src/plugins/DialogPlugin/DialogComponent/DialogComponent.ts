import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class DialogComponent extends Vue {
  public isOpen: boolean = true;
  public title: string = 'default title';
  public content: string = 'default content';
  public positiveAnswer: string = 'default confirm';
  public negativeAnswer: string = 'default cancel';

  public open() {
    console.log('inner open');
    this.isOpen = true;
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
