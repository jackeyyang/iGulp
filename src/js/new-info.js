/**
 * Created by SINO on 2016/11/25.
 */
$(function () {
    template.config('escape',false);
    var data = {
        "total": 1,
        "list": [
            {
                "id": 0,
                "title": "习近平同杜特尔特会谈：把分歧管控好，把合作谈起来",
                "author": "筱筱",
                "date": "2016-01-12",
                "category": "资讯中心",
                "article":"<p>7月26日的中央政治局会议认为，党的十八大以来，以习近平同志为总书记的党中央身体力行、率先垂范，坚定推进全面从严治党，加强党的建设，坚持思想建党和制度治党紧密结合，集中整饬党风，严厉惩治腐败，净化党内政治生态，党内政治生活展现新气象，赢得了党心民心，为开创治国理政新局面提供了重要保证。综合分析，有必要制定一部新形势下党内政治生活的准则。新形势下加强和规范党内政治生活，重点是各级领导机关和领导干部，关键是高级干部特别是中央委员会、中央政治局、中央政治局常务委员会的组成人员。高级干部特别是中央领导层组成人员必须以身作则，模范遵守党章党规，严守党的政治纪律和政治规矩，坚持不忘初心、继续前进，坚持率先垂范、以上率下，为全党作出示范。</p><p>会议认为，《中国共产党党内监督条例（试行）》2003年颁布施行以来，对我们坚持党要管党、从严治党方针，加强党内监督，维护党的团结统一，做到立党为公、执政为民，发挥了积极作用。同时，随着形势任务发展变化，《条例》与新实践新要求不相适应的问题显现出来。党的十八大和十八届三中、四中、五中全会对强化党内监督提出了明确要求，为修订党内监督条例提供了重要遵循。这几年，我们坚持党的领导，坚持全面从严治党，落实“两个责任”，严明党的纪律，积累了不少经验，为修订党内监督条例奠定了重要实践基础。修订工作时机成熟、条件具备，应抓紧抓好。</p>"
            }
        ]
    };
    // $.getJSON('js/article.json',function(data){
    //
    // });
    var html = template('articleInfo',data.list[0]);
    $('.info-article').html(html);


});