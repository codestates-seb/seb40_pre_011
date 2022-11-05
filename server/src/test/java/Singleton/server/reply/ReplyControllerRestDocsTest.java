package Singleton.server.reply;

import Singleton.server.reply.controller.ReplyController;
import Singleton.server.reply.dto.ReplyPatchDto;
import Singleton.server.reply.dto.ReplyPostDto;
import Singleton.server.reply.dto.ReplyResponseDto;
import Singleton.server.reply.entity.Reply;
import Singleton.server.reply.mapper.ReplyMapper;
import Singleton.server.reply.service.ReplyService;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import java.time.LocalDateTime;
import java.util.List;

import static Singleton.server.util.ApiDocumentUtils.getRequestPreProcessor;
import static Singleton.server.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(ReplyController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class ReplyControllerRestDocsTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ReplyService replyService;

    @MockBean
    private ReplyMapper replyMapper;

    @Autowired
    private Gson gson;

    @Test
    public void postReplyTest() throws Exception{
        // given
        ReplyPostDto post = ReplyPostDto.builder()
                .memberId(1L)
                .contentId(1L)
                .replyBody("답글내용")
                .build();

        ReplyResponseDto responseDto =
                ReplyResponseDto.builder()
                        .memberId(1L)
                        .contentId(1L)
                        .replyId(1L)
                        .replyBody("답글내용")
                        .replySelect(false)
                        .createdAt(LocalDateTime.of(2022, 10, 31, 10, 0, 0))
                        .modifiedAt(LocalDateTime.of(2022, 10, 31, 10, 0, 0))
                        .build();

        String content = gson.toJson(post);

        given(replyMapper.replyPostDtoToReply(Mockito.any(ReplyPostDto.class))).willReturn(Mockito.mock(Reply.class));
        given(replyService.createReply(Mockito.any(Reply.class))).willReturn(Mockito.mock(Reply.class));
        given(replyMapper.replyToReplyResponseDto(Mockito.any(Reply.class),null)).willReturn(responseDto);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/reply")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content));

        // then
        actions
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.data.memberId").value(post.getMemberId()))
                .andExpect(jsonPath("$.data.contentId").value(post.getContentId()))
                .andExpect(jsonPath("$.data.replyBody").value(post.getReplyBody()))
                .andDo(document("post-reply",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("멤버번호"),
                                        fieldWithPath("contentId").type(JsonFieldType.NUMBER).description("게시글번호"),
                                        fieldWithPath("replyBody").type(JsonFieldType.STRING).description("답글내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("멤버번호"),
                                        fieldWithPath("data.contentId").type(JsonFieldType.NUMBER).description("게시글번호"),
                                        fieldWithPath("data.replyId").type(JsonFieldType.NUMBER).description("답글번호"),
                                        fieldWithPath("data.replyBody").type(JsonFieldType.STRING).description("답글내용"),
                                        fieldWithPath("data.replySelect").type(JsonFieldType.BOOLEAN).description("답글채택여부"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성일시"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정일시")
                                )
                        )
                ));
    }

    @Test
    public void patchReplyTest() throws Exception {
        // given
        long reply_Id = 1L;
        ReplyPatchDto patch = ReplyPatchDto.builder()
                .replyId(reply_Id)
                .replyBody("답글 수정")
                .build();

        ReplyResponseDto responseDto =
                ReplyResponseDto.builder()
                        .memberId(1L)
                        .contentId(1L)
                        .replyId(1L)
                        .replyBody("답글 수정")
                        .replySelect(false)
                        .createdAt(LocalDateTime.of(2022, 10, 31, 10, 0, 0))
                        .modifiedAt(LocalDateTime.of(2022, 10, 31, 10, 0, 0))
                        .build();

        String content = gson.toJson(patch);

        given(replyMapper.replyPatchDtoToReply(Mockito.any(ReplyPatchDto.class))).willReturn(Mockito.mock(Reply.class));
        given(replyService.updateReply(Mockito.any(Reply.class))).willReturn(Mockito.mock(Reply.class));
        given(replyMapper.replyToReplyResponseDto(Mockito.any(Reply.class),null)).willReturn(responseDto);

        // when
        ResultActions actions=
                mockMvc.perform(patch("/reply/{reply-id}",1,reply_Id)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.replyId").value(patch.getReplyId()))
                .andExpect(jsonPath("$.data.replyBody").value(patch.getReplyBody()))
                .andDo(document("patch-reply",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("replyId").type(JsonFieldType.NUMBER).description("답글번호"),
                                        fieldWithPath("replyBody").type(JsonFieldType.STRING).description("수정내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
                                        fieldWithPath("data.memberId").type(JsonFieldType.NUMBER).description("멤버번호"),
                                        fieldWithPath("data.contentId").type(JsonFieldType.NUMBER).description("게시글번호"),
                                        fieldWithPath("data.replyId").type(JsonFieldType.NUMBER).description("답글번호"),
                                        fieldWithPath("data.replyBody").type(JsonFieldType.STRING).description("답글내용"),
                                        fieldWithPath("data.replySelect").type(JsonFieldType.BOOLEAN).description("답글채택여부"),
                                        fieldWithPath("data.createdAt").type(JsonFieldType.STRING).description("생성일시"),
                                        fieldWithPath("data.modifiedAt").type(JsonFieldType.STRING).description("수정일시")
                                )
                        )
                ));
    }

    @Test
    public void getReplyTest() throws Exception{
        //given

        //when
        ResultActions actions = mockMvc.perform(RestDocumentationRequestBuilders.get("/reply/{reply-id}",1L));

        //then
        MvcResult result = actions.andExpect(status().isOk())
                .andDo(
                        document("get-reply",
                                pathParameters(
                                        parameterWithName("reply-id").description("답변 번호")
                                )
//                                ,
//                                responseFields(
//                                        fieldWithPath("data").type(JsonFieldType.STRING).description("요청 성공 시 응답메세지")
//                                )
                        )).andReturn();
    }

    @Test
    public void deleteReplyTest() throws Exception{
        //given

        //when
        ResultActions actions = mockMvc.perform(RestDocumentationRequestBuilders.delete("/reply/{reply-id}",1L));

        //then
        MvcResult result = actions.andExpect(status().isNoContent())
                .andDo(
                        document("delete-reply",
                                pathParameters(
                                        parameterWithName("reply-id").description("답변 번호")
                                )
//                                ,
//                                responseFields(
//                                        fieldWithPath("data").type(JsonFieldType.STRING).description("요청 성공 시 응답메세지")
//                                )
                        )).andReturn();
    }
}
