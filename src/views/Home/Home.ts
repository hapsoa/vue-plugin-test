import { Component, Vue } from 'vue-property-decorator';
// import DialogComponent from '@/plugins/DialogPlugin/DialogComponent/DialogComponent.vue';

@Component({
  // components: { DialogComponent },
})
export default class Home extends Vue {
  public openDialog() {
    this.$dialog.open();
  }

  private created() {
    this.$dialog.title = '제목입니다';
    this.$dialog.content = '내용을 넣을게요';
    this.$dialog.positiveAnswer = '예';
    this.$dialog.negativeAnswer = '아니요';
  }

  private mounted() {
    //
  }
}
